import MFA from 'mangadex-full-api'

export async function Highlights() {
  const response = await MFA.Manga.getMultiple(
    'a77742b1-befd-49a4-bff5-1ad4e6b0ef7b',
    '4141c5dc-c525-4df5-afd7-cc7d192a832f',
    'a1c7c817-4e59-43b7-9365-09675a149a6f',
    '4f3bcae4-2d96-4c9d-932c-90181d9c873e',
    '34e45b02-b5c8-4a4b-a21a-7b5059391dc8',
    '801513ba-a712-498c-8f57-cae55b38cc92',
    '5bf889d8-fa60-4c4d-b343-b989a8bf21b0',
    'e7eabe96-aa17-476f-b431-2497d5e9d060',
    '077a3fed-1634-424f-be7a-9a96b7f07b78',
  )
}
