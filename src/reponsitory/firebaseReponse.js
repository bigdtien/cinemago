import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";



export const addDocument = async (collectionName, values) => {
    try {
      
      await addDoc(collection(db, collectionName), values);
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
};

export const fetchDocumentsRealtime = (collectionName, callback) => {
  const collectionRef = collection(db, collectionName);

  // Lắng nghe dữ liệu thay đổi trong thời gian thực
  const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });

    // Gọi callback với dữ liệu mới nhất
    callback(documents);
  });

  // Hàm trả về unsubscribe để có thể dừng lắng nghe khi không cần nữa
  return unsubscribe;
};

export const deleteDocument = async (collectionName, value) => {
// Xóa tài liệu khỏi Firestore
await deleteDoc(doc(collection(db, collectionName), value.id));
};

export const updateDocument = async (collectionName, values) => {

 await updateDoc(doc(collection(db, collectionName), values.id), values);
};