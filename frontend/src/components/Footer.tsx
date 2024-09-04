const Footer = () => {
 return(
    <div className="bg-orange-500 py-10">
        <div className="container max-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">BerukiEats.com</span>
            <div className="text-white font-bold tracking-tight flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
    </div>
 )
}

export default Footer;