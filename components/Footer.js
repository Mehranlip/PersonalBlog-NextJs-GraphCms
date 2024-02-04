
import Link from 'next/link'
import dynamic from 'next/dynamic'

function Footer() {
    return (

        <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 copyright">© 2023 <a href="/" class="hover:underline copyright">Mehranlip Blog™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-center font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/" class="mr-4 hover:underline md:mr-6  footer-link">Home page</Link>
                    </li>
                    <li>
                        <Link href="/category/news" class="mr-4 hover:underline md:mr-6 footer-link">News</Link>
                    </li>
                    <li>
                        <Link href="https://mehranlip.ir" class="mr-4 hover:underline md:mr-6 footer-link">About us</Link>
                    </li>
                    <li>
                        <Link href="#" class="hover:underline footer-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false })