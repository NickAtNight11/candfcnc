import React, { useState, useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import AdminBox from '../admin components/AdminBox'
import AdminPopup from '../admin components/AdminPopup'
import AdminCreationBox from '../admin components/AdminCreationBox'

import { db, storage } from '../../firebase-config'
import { collection, orderBy, query, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject} from 'firebase/storage'
import { v4 } from 'uuid';

function Admin() {
  const [popupimage, setPopupImage] = useState(null);
  const [popupupload, setPopupUpload] = useState("");
  const [popupiid, setPopupIid] = useState("");
  const [popupdesc, setPopupDesc] = useState("");
  const [popupname, setPopupName] = useState("");
  const [homepage, setHomePage] = useState([]);
  const [cncplaques, setCncPlaques] = useState([]);
  const [cncsigns, setCncSigns] = useState([]);
  const [cncmisc, setCncMisc] = useState([]);
  const [lasersigns, setLaserSigns] = useState([]);
  const [lasercups, setLaserCups] = useState([]);
  const [laserflasks, setLaserFlasks] = useState([]);
  const [laserjewelry, setLaserJewelry] = useState([]);
  const [lasermisc, setLaserMisc] = useState([]);
  const [tablechanged, setTableChanged] = useState(true);
  const [currentCollection, setCurrentCollection] = useState("");

  const tempUploadRef = ref(storage, "temp upload/");
  const auth = getAuth();


  let getCollection = ((c) => {
    let collectionRef = collection(db, c)
    return query(collectionRef, orderBy("img_name"))
  });

  let createPic = async (i, iname, idesc) => {
    let imageRef = ref(storage, `${currentCollection}/${iname + "_" + v4()}`);
    uploadBytes(imageRef, i).then((result) => {
      console.log("Upload Successful");
      getDownloadURL(result.ref).then((value) => {
        addDoc(collection(db, currentCollection), { img:value, img_name: iname, alt: idesc}).then(() => {
          setTableChanged(true);
        });
      })
    });
  };

  let updatePic = async (i, id, iname, idesc) => {
    let userDoc = doc(db, currentCollection, id);
    await getDoc(userDoc).then((result) => {
      if(result.data().img_name !== iname) {
        listAll(ref(storage, `${currentCollection}/`)).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              if(url === result.data().img) {
                deleteObject(item).then(() => {
                  let imageRef = ref(storage, `${currentCollection}/${iname + "_" + v4()}`);
                  uploadBytes(imageRef, i).then((result) => {
                    console.log("Update Successful");
                    getDownloadURL(result.ref).then((value) => {
                      updateDoc(userDoc, {img: value, img_name: iname, alt: idesc}).then(() => {
                        setTableChanged(true);
                      });
                    })
                  })
                });
              }
            });
          });
        })
      }
      else {
        updateDoc(userDoc, {img: result.data().img, img_name: iname, alt: idesc}).then(() => {
          console.log("Update Successful");
          setTableChanged(true);
        });
      }  
    });
  };

  let deletePic = async (iid, i) => {
    let userDoc = doc(db, currentCollection , iid);
    listAll(ref(storage, `${currentCollection}/`)).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if(url === i) {
            deleteObject(item).then(() => {
              console.log("Delete Successful");
            });
          }
        });
      });
    }) 
    await deleteDoc(userDoc).then(()=> {
      setTableChanged(true);
    });
  };

  let openClosePopup = (() => {
    let p = document.getElementById("admin-popup");
    p.className = (p.className === "admin-popup-invisible") ? "admin-popup-visible" : "admin-popup-invisible";
    document.getElementById("admin-popup-message").value = "";
    document.getElementById("admin-popup-image-selector").value = "";
    setPopupImage(null);
    setPopupIid("");
    setPopupName("");
    setPopupDesc("");
    listAll(tempUploadRef).then((response) => {
      response.items.forEach((item) => {
        deleteObject(item);
      });
    }).then(() => {console.log("Temp Folder Cleared");});
  });

  let editPopup = ((file, iid, i, iname, idesc, ) => {
    const altarea = document.getElementById("admin-popup-message")
    if(file != null) {
      setPopupName(file.name);
      setPopupUpload(file)
      let imageRef = ref(storage, `temp upload/${file.name + "_" + v4()}`);
      uploadBytes(imageRef, file).then(() => {
        console.log("Upload Successful");
        listAll(tempUploadRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setPopupImage(url);
            });
          });
        });
      });
    }
    else if(i !== "") {
      setPopupImage(i);
      setPopupIid(iid);
      setPopupName(iname);
    }
    if(idesc !== "") {
      altarea.value = idesc;
      setPopupDesc(idesc);
    }
  });

  let submitPopup = (() => {
    if(popupiid !== "") {
      updatePic(popupupload, popupiid, popupname, popupdesc);
    }
    else {
      createPic(popupupload, popupname, popupdesc);
    }
    openClosePopup();
  });

  let clickPopup = ((e) => {
    switch(e.currentTarget.id) {
      case "admin-popup-x":
      case "admin-popup-cancel": openClosePopup(); break;
      case "admin-popup-add": submitPopup(); break;
      default: return;
    }
  });

  let clickBox = ((e, dir, iid, i, iname, idesc) => {
    setCurrentCollection(dir.toLowerCase());
    switch(e.currentTarget.id) {
      case "table-item-edit": openClosePopup(); editPopup(null, iid, i, iname, idesc); break;
      case "table-item-delete": deletePic(iid, i); break;
      case "admin-add-new": openClosePopup(); break;
      default: return;
    }
  });

  let signUserOut = (() => {
    signOut(auth).then(() => {
      console.log("Sign Out Complete");
    }).catch((error) => {
      console.log("Sign Out Failed - " + error);
    });
  });


  useEffect(() => {
      const getPics = async (s) => {
          const data = await getDocs(getCollection(s));
          return data.docs.map((item) => ({...item.data(), id: item.id}));
      }
      if(tablechanged) {
        getPics("home page").then((value) => {setHomePage(value)});
        getPics("cnc plaques").then((value) => {setCncPlaques(value)});
        getPics("cnc signs").then((value) => {setCncSigns(value)});
        getPics("cnc misc").then((value) => {setCncMisc(value)});
        getPics("laser signs").then((value) => {setLaserSigns(value)});
        getPics("laser cups").then((value) => {setLaserCups(value)});
        getPics("laser flasks").then((value) => {setLaserFlasks(value)});
        getPics("laser jewelry boxes").then((value) => {setLaserJewelry(value)});
        getPics("laser misc").then((value) => {setLaserMisc(value)});
        setTableChanged(false);
      }
  }, [tablechanged]);

  return (
    <div className='clear-container'>  
      <button type="button" class="btn btn-dark btn-lg admin-button" onClick={signUserOut}>Sign Out</button>
      <AdminPopup picture={<AdminCreationBox image={popupimage}/>} onClick={clickPopup} onChange={editPopup}/>
      <h1>Home Page</h1>
      <AdminBox title="Home Page" data={homepage} onClick={clickBox}/>
      <h1>Creations Page</h1>
      <AdminBox title="CNC Plaques" data={cncplaques} onClick={clickBox}/>
      <AdminBox title="CNC Signs" data={cncsigns} onClick={clickBox}/>
      <AdminBox title="CNC Misc" data={cncmisc} onClick={clickBox}/>
      <AdminBox title="Laser Signs" data={lasersigns} onClick={clickBox}/>
      <AdminBox title="Laser Cups" data={lasercups} onClick={clickBox}/>
      <AdminBox title="Laser Flasks" data={laserflasks} onClick={clickBox}/>
      <AdminBox title="Laser Jewelry Boxes" data={laserjewelry} onClick={clickBox}/>
      <AdminBox title="Laser Misc" data={lasermisc} onClick={clickBox}/>
    </div>
  )
}

export default Admin