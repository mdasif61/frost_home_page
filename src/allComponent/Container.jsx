const Container = ({children}) => {
    return (
        <div className="w-[1440px] min-h-[1024px] bg-black mx-auto">
            {children}
        </div>
    );
};

export default Container;