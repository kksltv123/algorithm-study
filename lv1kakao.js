function solution(id_list, report, k) {
    var answer = new Array(id_list.length);// arryLength 만큼의 빈 슬롯을 가진다
    answer.fill(0) // [0, 0, 0, 0]
    const report_list = {}
    
    id_list.map((user) => {
        report_list[user] = [] // key로 userid를 value로 빈 배열을 가지는 객체
    })
    console.log(report_list)


    report.map((user) => {
        // 구조 분해 할당
        const [user_id, report_id] = user.split(' ') // user.split(' ') → 공백을 기준으로 나눈 배열
        console.log(user.split(' '))
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }
        // 중복 신고의 경우 키 값에 아이디가 포함되어있기때문에 1번만 추가된다.
    })
    
    for(const key in report_list){
        // for...in 문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된
        // 모든 열거 가능한 속성에 대해 반복 → 키 값만큼 반복
        if(report_list[key].length >= k){
            report_list[key].map((user) => {
                // indexOf 메서드 매개변수로 받은 값과 같은 배열의 요소의 인덱스 값 반환
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    console.log(answer)
    return answer;
}

let id_list = ["muzi", "frodo", "apeach", "neo"]
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
let k = 2
solution(id_list, report, k)
// muzi: [apeach]
// 정지 → frodo: [muzi, apeach] 
// apeach: []
// 정지 → neo: [frodo, muzi] 
// 신고한 유저가 정지를 당해야지 메일이 오기때문에 
// 정지 당한 유저가 있는 배열만 보면 된다. 
