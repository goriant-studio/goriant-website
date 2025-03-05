import Image from "next/image";
import { getAssetPath } from '@/utils/constants';

const Trade = () => {
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-48 px-6 relative">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-5">
                {/* Column-1 */}
                <div>
                    <Image src={getAssetPath('/images/trade/macbook.png')} alt="macBook-image" width={787} height={512} />
                </div>

                {/* Column-2 */}
                <div>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">Trade anywhere</h3>
                    <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">Anytime, anywhere. Trade crypto on your terms.</p>
                    <div className="flex gap-8 items-center justify-center sm:justify-start">
                        <Image src={getAssetPath('/images/trade/mac.svg')} alt="macOS-image" width={61} height={105} />
                        <div className="cursor-pointer">
                            <Image src={getAssetPath('/images/trade/appstore.svg')} alt="appstore-image" width={80} height={105} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src={getAssetPath('/images/trade/windows.svg')} alt="windows-image" width={80} height={105} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src={getAssetPath('/images/trade/android.svg')} alt="android-image" width={71} height={105} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;
