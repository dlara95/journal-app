import { collection, getDocs, query } from "@firebase/firestore"
import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
    const notesSnap = await getDocs(query(collection(db, `${uid}/journal/notes`)));
    const notes = [];

    notesSnap.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return notes;
}