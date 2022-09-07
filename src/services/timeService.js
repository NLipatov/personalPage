export const timeService = () =>
{
    const getUserHours = () =>
    {
        const now = new Date();
        const hour = now.getHours();
        return hour;
    }

    const getThemeBasedOnUserTime = () => {
        const hour = getUserHours();
        if(!(hour >= 22 || hour <= 8))
        {
            return 'light';
        }
        else
        {
            return 'dark';
        }
    }

    return {getUserHours, getThemeBasedOnUserTime};
}