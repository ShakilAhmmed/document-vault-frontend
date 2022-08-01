import {useEffect, useRef, useState} from "react";
import http from "../../../../interceptors/http";

const DocumentShareModal = (props) => {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('');
    const modalCloseRef = useRef();

    const fetchUsers = () => {
        http.get('/users')
            .then((res) => {
                setUsers(res.data.data);
            })
            .catch(console.log);
    }

    const handleSubmission = () => {
        http.post(`/documents/shared/${props.document}?userId=${userId}`)
            .then((res) => {
                if (res.status === 201) {
                    modalCloseRef.current.click();
                }
            })
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="user_id" className="form-label">User</label>
                            <select name="user_id" id="user_id" className="form-control" defaultValue={-1}
                                    onChange={(event) => {
                                        setUserId(event.target.value)
                                    }}
                            >
                                <option value="-1">--SELECT--</option>
                                {users && users.map((item) => {
                                    return (
                                        <option value={item.id}>{item.email}</option>
                                    );
                                })

                                }
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    ref={modalCloseRef}>Close
                            </button>
                            <button type="button"
                                    onClick={() => {
                                        handleSubmission()
                                    }}
                                    className="btn btn-primary">Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default DocumentShareModal;