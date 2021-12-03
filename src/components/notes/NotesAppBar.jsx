import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    const handlePictureClick = () => {
        document.getElementById('fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de gosto 2020</span>
            <input 
                id="fileSelector"
                name="file"
                onChange={handleFileChange}
                type="file"
                style={{ display: 'none' }} />
            <div>
                <button
                    onClick={handlePictureClick} 
                    className="btn">
                    Picture
                </button>
                <button className="btn" onClick={() => handleSave()}>
                    Save
                </button>
            </div>
        </div>
    )
}
