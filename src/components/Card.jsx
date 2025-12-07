import { SocialLinks } from "./SocialLinks"

export function Card () {
    return (
        <section className="px-6 py-8 w-96 h-96 mx-auto max-sm:w-[80vw]">
            <div className="bg-linear-to-r from-blue-500 to-blue-800 h-24"></div>
            <div className="py-2 bg-indigo-50 flex flex-col items-center">
                <img className="-mt-5 w-20 h-20 rounded-full" src="https://tse4.mm.bing.net/th/id/OIP.DHCu5Gj_fk8TtQXlV7PY-gHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />

                <div className="pt-2 pb-3 text-center">
                    <h3 className="italic text-xl font-semibold text-gray-800">John Doe</h3>
                    <span>Desarrollador backend</span>
                </div>

                <div className="w-full h-px bg-gray-600"></div>

                <div className="pt-3 flex flex-col gap-2">
                    <h3 className="text-center font-semibold">Social media</h3>

                    <SocialLinks></SocialLinks>
                </div>
            </div>
        </section>
    )
}