const dataList = [
    {
        "id": 1,
        "title": "첫번째 게시글입니다.",
        "content": "게시글 test 입니다.",
        "createAt": "2021-04-28",
    },
    {
        "id": 2,
        "title": "Trollo 정식 서비스 오픈!",
        "content": "는 훼이크",
        "createAt": "2021-04-28",
    },
];

const getContentById = (id: number) => {
    const array = dataList.filter(content => content.id === id);
    if (array.length === 1) {
        return array[0];
    }
    return null;
}

export {
    dataList,
    getContentById
};