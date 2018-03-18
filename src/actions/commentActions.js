export const fetchComments = () => {
    const data = [
        { author: "Developer", body: "You look nice today." },
        { author: "Aaron Morey", body: "I know, right?!" }
    ];

    return {
        type: 'FETCH_COMMENTS',
        payload: data
      };
}