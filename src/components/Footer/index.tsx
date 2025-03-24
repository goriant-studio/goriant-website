import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/utils/constants";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Quick Links",
    link: ["🎮 My Games", "🛠 Development Blog", "📜 About Me", "❓ FAQ", "🔒 Privacy Policy"],
  },
];

const socialLinks: Social[] = [
  { imgsrc: "/images/footer/insta.svg", href: "https://instagram.com/" },
  { imgsrc: "/images/footer/dribble.svg", href: "https://dribble.com/" },
  { imgsrc: "/images/footer/twitter.svg", href: "https://twitter.com/" },
  { imgsrc: "/images/footer/youtube.svg", href: "https://youtube.com/" },
];

const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-6">
            <p className="text-white text-xl font-medium mb-9">
              🎮 Indie Dev Portfolio
            </p>

            <h3 className="text-gray-300 text-sm font-normal leading-9 mb-4 lg:mb-16">
              I believe games are more than just code<p></p>
            
              They are worlds waiting to be explored. With a heart full of
              passion and a mind bursting with creativity, I bring stories to
              life through my indie game creations. From enchanting pixel
              landscapes to thrilling RPG adventures, every project is crafted
              with love and dedication. Let's build something magical together!
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <img
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="footer-icons hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={link.includes("Privacy Policy") ? "/privacy-policy" : "/"}
                      className="text-gray-300 text-sm font-normal mb-6 hover:text-gray-100 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            {/* <h4 className="text-gray-300 text-sm font-normal mb-6 flex gap-2 hover:text-gray-100 transition-colors"><Image src={getAssetPath('/images/footer/number.svg')} alt="number-icon" width={20} height={20} />(406) 555-012</h4> */}
            <h4 className="text-gray-300 text-sm font-normal mb-6 flex gap-2 hover:text-gray-100 transition-colors">
              <Image
                src={getAssetPath("/images/footer/email.svg")}
                alt="email-icon"
                width={20}
                height={20}
              />
              studio@goriant.com
            </h4>
            <h4 className="text-gray-300 text-sm font-normal mb-6 flex gap-2 hover:text-gray-100 transition-colors"><Image src={getAssetPath('/images/footer/address.svg')} alt="address-icon" width={20} height={20} />Ho Chi Minh city, D7, Việt Nam</h4>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="py-8 px-4 border-t border-gray-800">
        <h3 className="text-center text-gray-300">
          @2025 - All Rights Reserved by{" "}
          <Link
            href="https://goriant.com/"
            target="_blank"
            className="hover:text-gray-100 transition-colors"
          >
            {" "}
            Goriant.com
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default footer;
