import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Icon = () => {
    return (
        <>
            <div className="flex text-white justify-center gap-4 items-center pt-5 text-2xl">
                <a href="https://www.linkedin.com/in/digontha-das-04a1562a5"><FaLinkedin className="hover:text-blue-500"  /></a>
                <a href="https://github.com/Digontha"><FaGithub className="hover:text-gray-400"  /></a>
                <a href="https://www.facebook.com/digontha.das.7"><FaFacebook className="hover:text-blue-600"  /></a>
            </div>
        </>
    );
};

export default Icon;