const Container = ({children}) => {
    return (
        <div className="2xl:w-[1536px] md:py-6 py-3 xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] min-w-full min-h-[1024px] bg-black mx-auto">
            {children}
        </div>
    );
};

export default Container;