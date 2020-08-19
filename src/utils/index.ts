/**
 * @description
 * Extract hour and minutes from time parameter
 * sum both and them return hour in minutes
 * @param {string} time
 * @returns {number} hour in minutes
*/
export default function convertHourToMinutes (time: string) {
    const [hour, minutes] = time.split(':').map(Number)
    return ((hour*60) + minutes)
}
