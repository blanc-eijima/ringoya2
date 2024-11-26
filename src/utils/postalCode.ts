export async function lookupPostalCode(postalCode: string): Promise<{
  prefecture: string;
  city: string;
  street: string;
} | null> {
  // 郵便番号からハイフンを削除
  const cleanPostalCode = postalCode.replace(/-/g, '');
  
  if (cleanPostalCode.length !== 7) {
    return null;
  }

  try {
    const response = await fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleanPostalCode}`
    );
    const data = await response.json();

    if (data.results?.[0]) {
      const result = data.results[0];
      return {
        prefecture: result.address1,
        city: result.address2,
        street: result.address3
      };
    }
    return null;
  } catch (error) {
    console.error('郵便番号検索エラー:', error);
    return null;
  }
}