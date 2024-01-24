export const getActivities = async () => {
    const response = await fetch('https://github-contributions-api.jogruber.de/v4/gerrronimo?y=last');
    const res = await response.json();

    return res.contributions;
};
