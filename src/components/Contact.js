const Contact=()=>{
return (




        <> <div className="flex justify-center items-center">

            <div className="w-6/12 h-[400px] mt-[100px] ml-14 border-4 border-blue-400 p-6 pb-8">
            <form>
            <div className="text-2xl mt-12">

      <label>Enter your name:
        <input type="text" className="border-2 text-fuchsia-600 ml-8 pl-2 border-purple-500 rounded-md
        " placeholder="john Doe" />
      </label>
            </div>
            <div className="text-2xl mt-8">
      <label>phone NO:
        <input type="number" className="border-2 text-fuchsia-600 focus:border-teal-500 pointer-events-auto ml-8 border-purple-500 rounded-md" placeholder="123XX" />
      </label>
            </div>
            <div className="text-2xl mt-8">
      <label>Message:
        <input type="paragraph"className="border-2 p-1 whitesp000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 h-[150px] text-fuchsia-600 pointer-events-auto ml-8 border-purple-500 rounded-md ml-11 pt-[0px]" placeholder="my name is..."/>
      </label>
      <button className=" relative right-[-80px] bottom-[-40px] bg-blue-500 text-white  p-2 rounded-md">submit</button>
            </div>
      
    </form>
        </div>
            </div>
        </>
    )

};
export default Contact;