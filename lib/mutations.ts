import fetcher from "./fetcher";

export const auth = (
    mode: "signin" | "signup",
    body: { email: string; password: string; first?: string; last?: string }
) => {
    return fetcher(`/${mode}`, body);
};
