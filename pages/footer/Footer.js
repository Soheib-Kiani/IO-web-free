import Image from "next/image";
const Footer = () => {
    return (
        <div >
            <footer className="bg-gray-900 flex flex-col items-center justify-center gap-y-2 py-2 ">
                <div className="flex gap-x-3">
                    <div className="bg-white rounded-full flex items-center justify-center p-2">
                        <Image width={20} height={20} src={"/youtube.png"}></Image>
                    </div>
                    <div className="bg-white rounded-full flex items-center justify-center p-2">
                        <Image width={20} height={20} src={"/github.png"}></Image>
                    </div>
                    <div className="bg-white rounded-full flex items-center justify-center p-2">
                        <Image width={20} height={20} src={"/instagram.png"}></Image>
                    </div>

                </div>
                <div className="text-xs text-white">info - support - Marketing</div>
                <div className="text-xs text-white">terms of - IO Company - Privacy Policy</div>
                <div className="text-white opacity-25">IO Company</div>
            </footer> 
         

                {/* <footer class="h-10 bg-blue-500">Footer</footer> */}
            </div>
        
    );
}

export default Footer;