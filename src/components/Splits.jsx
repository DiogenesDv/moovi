import BgJuros from "./BgJuros";

function Splits() {
    return (
        <div className="">
            <div className="">
                <div className="flex flex-col ml-5 mr-5 border p-3 rounded border-gray-400 hover:bg-green-200 hover:border-green-700">
                    <div className="flex">
                        <div className="container ms-2 mt-1 text-sm">
                            <label id="pix_price_parcelado" for="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">3x R$ 10.192,66</label> 
                            <p id="cashback_return_parcelado" className="text-xs font-normal dark:text-gray-300 text-slate-500">Total R$ 30.620,00</p>
                            <BgJuros/>
                        </div>
                        <div className="flex items-center h-5">
                            <input id="default-radio" type="radio" value="" name="default-radio" class="w-4 h-4 cursor-pointer"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Splits;