export const checkHealth = async (checkHealthUrl: string) => {
    try {
        const res = await fetch(checkHealthUrl, {
            method: "GET",
        });
        return res.ok;
    } catch (error) {
        return false;
    }
}