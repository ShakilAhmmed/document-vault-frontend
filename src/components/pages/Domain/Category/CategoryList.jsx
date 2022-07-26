const CategoryList = (props) => {
    const {categories , deleteCategory} = props;

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Categories</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table mb-0 table-centered">
                            <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>User Email</th>
                                <th>User NID</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th className="text-end">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {categories && categories.map((category,index) => {
                                return (
                                    <tr key={index}>
                                        <td> { index + 1 } </td>
                                        <td> { category.user.email } </td>
                                        <td> { category.user.national_id } </td>
                                        <td>{ category.title }</td>
                                        <td>{ category.status === 1 ? 'Active' : 'Inactive' }</td>
                                        <td className="text-end">
                                            <button className="btn btn-de-dashed-info">
                                                <i className="fa fa-edit"></i>
                                            </button>

                                            <button onClick={() => deleteCategory(category.id)} className="btn btn-de-dashed-danger">
                                                <i className="fa fa-times"></i>
                                            </button>

                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryList;