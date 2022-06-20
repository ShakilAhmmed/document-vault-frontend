import CategoryList from "./CategoryList";
import CategoryForm from "./CategoryForm";

const Category = () => {
    return (
        <>

            <div className="row mt-5">
                <div className="col-lg-4">
                    <CategoryForm/>
                </div>
                <div className="col-lg-8">
                    <CategoryList/>
                </div>

            </div>
        </>
    );
};

export default Category;