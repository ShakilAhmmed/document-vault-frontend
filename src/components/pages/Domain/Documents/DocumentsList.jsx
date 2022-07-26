import {Download, Folder} from "react-feather";
import {useEffect, useState} from "react";
import http from "../../../../interceptors/http";
import moment from 'moment';

const DocumentsList = () => {

    const [documents, setDocuments] = useState([]);

    const getDocuments = async () => {
        try {
            const {data: data} = await http.get(`/documents`);
            setDocuments(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleDownload = async (documentId) => {
        try {
            const {data: data} = await http.get(`/documents/download/${documentId}`);

        } catch (e) {
            console.log(e);
        }
    };
    //
    useEffect(() => {
        getDocuments();
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="col-sm-12">
                    <div className="row">
                        {
                            documents && documents.map((document, index) => {
                                return (
                                    <div className="col-sm-4 text-center" key={index}>
                                        <div className="card">
                                            <Folder height={30} style={{marginLeft: '165px'}}/>
                                            <Download onClick={() => handleDownload(document.id)} height={30}
                                                      style={{marginLeft: '335px', marginTop: '-33px'}}/>
                                            <br/>
                                            <span>Title : {document.title}</span>
                                            <span>Category : {document.category.title}</span>
                                            <span>Uploaded At : {moment(document.updated_at).format('D-M-Y')}</span>
                                        </div>
                                    </div>
                                );
                            })
                        }


                    </div>
                </div>
            </div>
        </>
    );
}

export default DocumentsList;