import "aos/dist/aos.css";

const Gellery = () => {
  const photos = [
    {
      src: "https://i.ibb.co/9ZrsYJY/240-F-84436457-cc-U3pd-J8-Cdl9d8-Z3-MONDs-Tn-Azxt-Mf-DN7.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "https://i.ibb.co/rFhQ6Jn/240-F-55461650-gz-Iltksto-YXs-On-Pu-TFPWh-JT55-Ds-KGVtn.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "https://i.ibb.co/7rTfQ1m/240-F-498612549-amx-ERLVf5w-Bq-F23fgi-Hu2sqp-Uw-Sk5-QRw.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "https://i.ibb.co/gPRsKGj/240-F-501041740-u-YETiu3dirj-Obux-Cvhse-Bv9-ZMa-NVk-BLd.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "https://i.ibb.co/16GzR56/240-F-57526082-QLGn5-Vr-Q3-Jo14194e-ARe-Icsqao-Ep-FLo-W.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "https://i.ibb.co/4m7C46G/240-F-551696595-71-JSnih-Pur-JFq-Vn-HEo-C3-Ss-Te-V6-Cn0-Sgz.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "https://i.ibb.co/mDPPtSb/240-F-250311752-0ls-Clh-Uc9t-Kf-X4s-IMZ7qkad-Hv-KVILP2-C.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "https://i.ibb.co/TT2X5Lb/240-F-276236941-COmd-Pmgpr8-Ajy-Pkz5s7ot-LTTAHGQg3fj.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "https://i.ibb.co/T8dBz63/240-F-168887075-ZM3m-PBz-D4-Xqs9rk-HCLm-JNf-Kdccz-Wfdc4.jpg",
      width: 3,
      height: 4,
    },
  ];

  return (
    <div className="p-4 mt-2 mb-3">
      <p className="p-4 mb-3 text-6xl font-extrabold text-center rounded-md text-rose-600 bg-slate-300">
        Photo Gallery
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {photos.map((photo, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={photo?.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gellery;
