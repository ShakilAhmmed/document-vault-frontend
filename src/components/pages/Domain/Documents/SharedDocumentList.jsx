import {useEffect, useState} from "react";
import http from "../../../../interceptors/http";

const SharedDocumentList = () => {

    const [sharedFiles, setSharedFiles] = useState([]);

    const fetchSharedFiles = () => {
        http.get('/documents/shared-documents')
            .then((res) => {
                setSharedFiles(res.data.data);
            })
    };

    useEffect(() => {
        fetchSharedFiles();
    }, []);

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Shared Documents</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table mb-0 table-centered">
                            <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>User Email</th>
                                <th>User NID</th>
                                <th>File</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sharedFiles && sharedFiles.map((sharedFile, index) => {
                                return (
                                    <tr key={index}>
                                        <td> {index + 1} </td>
                                        <td> {sharedFile.user.email} </td>
                                        <td> {sharedFile.user.national_id} </td>
                                        <td> {sharedFile.document.title} </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SharedDocumentList;