export default function CheckConnection() {
    const [loading, setLoading] = useState(false);
    NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        if (state.isConnected == false) {
            setLoading(true)

        } else if (state.isConnected == true) {
            setLoading(false)

        }
    });

}