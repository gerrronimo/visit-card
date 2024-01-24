export const getLeetCodeStats = async () => {
    const response = await fetch('https://leetcode-stats-api.herokuapp.com/gerrronimo');
    const res = await response.json();

    return res;
};
