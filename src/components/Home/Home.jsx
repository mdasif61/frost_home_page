import SideBar from "../SideBar";

const Home = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1">
            <SideBar/>
            </div>
            <div className="col-span-2">
                main
            </div>
            <div className="col-span-1">
                others
            </div>
        </div>
    );
};

export default Home;