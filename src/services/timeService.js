export const timeService = () =>
{
    const getUserHours = () =>
    {
        const now = new Date();
        const hour = now.getHours();
        return hour;
    }

    return {getUserHours};
}