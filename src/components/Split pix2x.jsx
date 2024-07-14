function Split_pix() {
    return (
        <div className="mt-8">
            <div className="relative">
                <div className="absolute top-8 left-7">
                    <span className="absolute bottom-0 ml-3 mb-5  bg-slate-300 p-0.5 rounded-md  pl-2 pr-2 text-sm">Pix_Parcelado</span>
                </div>

                <div className="flex flex-col ml-5 mr-5 border p-3 rounded border-gray-400 hover:bg-green-200 hover:border-green-700">
                    <div className="flex">
                        <div className="container ms-2 mt-1 text-sm">
                            <label id="pix_price_parcelado" for="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">2x R$ 30.500,00</label> 
                            <p id="cashback_return_parcelado" className="text-xs font-normal dark:text-gray-300 text-slate-500">Total R$ 30.600,00</p>
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

export default Split_pix;