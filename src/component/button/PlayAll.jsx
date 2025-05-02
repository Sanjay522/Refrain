import play from "../../assets/playall.svg";


const PlayAll = () => {
    return (
      <div className="flex gap-5 items-center p-5  ">  
        <p className="hidden sm:text-lg font-semibold">Play All</p>
        <button>
            <img src={play} alt=""  className="cursor-pointer hover:opacity-50"/>
        </button>
      </div>
    );
  };
  
  export default PlayAll;
  