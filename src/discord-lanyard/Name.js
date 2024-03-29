import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Name = () => {
    const { status } = useLanyard({ userId: DISCORD_ID, socket: true });

    const getName = () => {
        if (!status || !status.discord_user) {
            return (
                <h1 className="font-sans antialiased font-semibold text-lg ">
                    loading
                    <span className="text-gray-400">#loading</span>
                </h1>
            );
        } else {
            return (
                <div className="font-sans  flex flex-col">
                    <h1 className="font-semibold text-lg">
                        {status.discord_user.username}
                    </h1>
                    <h2 className="text-gray-400 text-base font-medium">
                        #{status.discord_user.discriminator}
                    </h2>
                </div>
            );
        }
    };

    return <div>{getName()}</div>;
};
