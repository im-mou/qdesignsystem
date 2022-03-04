// opt-out of image optimization, no-op
const imageLoader = ({ src }: { src: string }) => {
    return src;
};

export default {
    imageLoader
};
