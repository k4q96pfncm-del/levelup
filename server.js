// npm install @notionhq/client 설치가 필요합니다.
const { Client } = require('@notionhq/client');

// 1. Notion 클라이언트 초기화
const notion = new Client({
  auth: 'NOTION_TOKEN', // 발급받은 시크릿 토큰
});

const databaseId = 'DATABASE_ID'; // 데이터베이스 ID

async function getDatabaseData() {
  try {
    // 2. 데이터베이스 쿼리 실행
    const response = await notion.databases.query({
      database_id: databaseId,
      // 필요한 경우 필터를 추가할 수 있습니다.
      /*
      filter: {
        property: 'Status',
        select: { equals: 'Done' }
      }
      */
    });

    // 3. 결과 출력 (결과는 배열 형태인 response.results에 담깁니다)
    console.log('데이터를 성공적으로 가져왔습니다!');
    console.dir(response.results, { depth: null });
    
    return response.results;
  } catch (error) {
    console.error('에러 발생:', error.body);
  }
}

getDatabaseData();