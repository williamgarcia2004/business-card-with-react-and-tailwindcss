import "../styles/social_links.css";

export function SocialLinks () {
    return (
        <>
            <div className="grid items-center grid-cols-4 max-[500px]:grid-cols-2">
                <a href="https://www.reddit.com/user/macho_castigador_69/" target="_blank">
                    <img className="w-10 h-10" src="https://static.vecteezy.com/system/resources/previews/023/986/983/original/reddit-logo-reddit-logo-transparent-reddit-icon-transparent-free-free-png.png" alt="" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=61561454685381" target="_blank">
                    <img className="w-10 h-10" src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="" />
                </a>

                <a href="https://www.instagram.com/wgarc_156/" target="_blank">
                    <img className="w-10 h-10" src="https://static.vecteezy.com/system/resources/previews/018/930/415/original/instagram-logo-instagram-icon-transparent-free-png.png" alt="" />
                </a>

                <a href="https://www.tiktok.com/@pride_3497" target="_blank">
                    <img className="w-8 h-8" src="https://w7.pngwing.com/pngs/986/124/png-transparent-tiktok-social-media-logos-brands-icon-thumbnail.png" alt="" />
                </a>
            </div>
        </>
    )
}