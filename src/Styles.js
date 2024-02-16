const styles = {
    custom_container: "w-11/12 hidden sm:block",
    heading: 'text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]',
    section: 'w-11/12 mx-auto',
    productTitle: 'text-[25px] font-[600] font-Roboto text-[#333]',
    productDiscountPrice: "font-bold text-[18px] text-[#333] font-Roboto",
    price: "font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through",
    shop_name: "pt-3 text-[15px] text-blue-400 pb-3",
    active_indicator: "absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]",
    button: 'w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer',
    cart_button: "px-[20px] h-[38px] rounded-[20px] bg-[#f63b60] flex items-center justify-center cursor-pointer",
    cart_button_text: "text-[#fff] text-[16px] font-[600]",
    input: "w-full border p-1 rounded-[5px]",
    activeStatus: "w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#40d132]",
    noramlFlex: "flex items-center",

    //Yarısını yazının mavi diğer yarısını ise renk geçişi ile kırmızıya döndermeye yarar
    silinerekGecisRenk: "font-extrabold bg-gradient-to-r from-blue-800 bg-red-300 text-transparent bg-clip-text",

    //sm den küçüğünü gizler. Butonun rengini döndürmeye yarar Üzerine geldiğinde ise renki kırmızı olur
    butonOver: "hidden sm:block bg-gradient-to-r from-rose-300 hover:bg-red-700 text-black font-bold py-2 px-4 rounded",

    //y eksenin de 6 birimlik boşluk bırakır. sm den sonra flex row olmasını sağlar. 
    yanyanaResim: "flex flex-col gay-y-6 sm:flex-row text-white",

    //before:hidden: Pseudo elementi (örneğin ::before) gizler. sm:before:block: Ekran küçüldüğünde (::before) blok olarak görünmesini sağlar.before:absolute: Ekran içerisinde (::before) konumunu mutlak yapar.
    //before:content-test300: Ekran öncesi içeriği (::before) belirli bir içerik (burada "test300") ile doldurur. lg:before:bottom-2: Geniş ekranlarda (::before) alt kenar boşluğunu 2 birim yapar.
    ekranaGoreMetin: "text-lg font-light m-auto before:hidden sm:before:block before:absolute before:content-test300 lg:before:bottom-2 before:-bottom-10 before:right-0 mt-20",

    //rounded-lg: Köşeleri büyük bir yuvarlaklık (border radius) uygular, bu da köşeleri daha yumuşak hale getirir.
    //px-6: Yatay (horizontal) dolgu (padding) miktarını 6 birim olarak belirler.
    //w-fit: Öğenin içeriğinin enine (width) içeriğin boyutuna uygun olacak şekilde boyutlanmasını sağlar. Yani, içeriğin genişliği kadar bir alanı kaplar.
    buttonAyarlama: "text-2xl font-bold bg-primary-100 w-fit px-6 py-4 mt-6 rounded-lg",
    animasyonBox: "w-[200px] h-[200px] cursor-pointer bg-red-600 flex-col justify-center items-center"
};


//     /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}",
//     ],
//     theme: {
//       extend: {

//         colors: {
//           "primary-100": "#283388",
//           "primary-300": "#C748D2",
//           "primary-500": "#1F1F1F",
//         },
//         content: {
//           test100: "url('./img/i.png')"
//         }
//       },
//     },
//     plugins: [],
//     darkMode: 'class',
//   }

export default styles;