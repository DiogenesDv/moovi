 function Prices_pix() {
    return (
        <div className="relative">
            <div className="absolute top-8 left-7">
                <span className="absolute bottom-0 ml-5 mb-5  bg-slate-300 p-0.5 rounded-md pr-2 pl-2 text-sm">Pix</span>
            </div>

            <div className="flex flex-col ml-5 mr-5 border p-3 rounded border-gray-400 hover:bg-green-200 hover:border-green-700">
                <div className="flex">
                    <div className="container ms-2 text-sm">
                        <label id="pix_price" for="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">1x</label> <span>R$ 30.500,00</span>
                        <p id="cashback_return" className="text-xs font-normal dark:text-gray-300 text-cyan-400">Ganhe 3% de Cashback</p>
                    </div>
                    <div className="flex items-center h-5">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 cursor-pointer text-green-300 bg-gray-100 border-gray-300 focus:ring-green-300 dark:focus:ring-green-300" />
                    </div>
                </div>
                <div>
                    <div className="mt-1">
                        <div className="">
                            <label id="pix_return" className="bg-blue-950 ml-2 pt-1 pl-1 pb-1 pr-7 rounded-e-3xl text-cyan-50">🤑 R$ 300,00 de volta no seu Pix na hora</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Prices_pix;