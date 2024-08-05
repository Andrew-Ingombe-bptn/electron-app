const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()})`;

const fun = async () => {
    const response = await versions.ping();
    console.log(response);
};

fun();
