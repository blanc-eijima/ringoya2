import React from 'react';
import { MapPin, Train, Bus, Car, Phone, Mail, Clock, MapIcon, Coffee, Landmark, Tree } from 'lucide-react';

const Access = () => {
  const transportMethods = [
    {
      icon: <Train className="w-6 h-6" />,
      title: '電車でお越しの場合',
      steps: [
        'JR山陽本線「温泉駅」下車',
        '駅から無料送迎バスで15分',
        '※送迎バスは要予約'
      ]
    },
    {
      icon: <Bus className="w-6 h-6" />,
      title: 'バスでお越しの場合',
      steps: [
        '山口駅から路線バス「温泉線」で40分',
        '「林檎屋前」バス停下車',
        '徒歩1分'
      ]
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'お車でお越しの場合',
      steps: [
        '山陽自動車道「山口IC」から30分',
        '無料駐車場完備（50台）',
        'カーナビ設定：〒123-4567 山口県温泉町温泉123-4'
      ]
    }
  ];

  const nearbySpots = [
    {
      icon: <Landmark className="w-5 h-5" />,
      name: '温泉寺',
      distance: '徒歩10分',
      description: '創建1300年の古刹。国宝の五重塔が見どころ。'
    },
    {
      icon: <Tree className="w-5 h-5" />,
      name: '温泉公園',
      distance: '徒歩5分',
      description: '四季折々の自然が楽しめる公園。桜の名所としても有名。'
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      name: '温泉街商店街',
      distance: '徒歩3分',
      description: '地元の特産品や飲食店が並ぶ情緒豊かな通り。'
    }
  ];

  return (
    <div className="pt-24 bg-stone-50">
      {/* Hero Section */}
      <div className="bg-stone-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-medium mb-4">アクセス・周辺案内</h1>
          <p className="text-stone-300">山口県の自然に囲まれた当館までのアクセス方法をご案内いたします。</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-medium mb-6 text-stone-800">基本情報</h2>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-stone-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-stone-800">所在地</p>
                <p className="text-stone-600">〒123-4567</p>
                <p className="text-stone-600">山口県温泉町温泉123-4</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-stone-600" />
              <div>
                <p className="font-medium text-stone-800">電話番号</p>
                <p className="text-stone-600">123-456-7890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-stone-600" />
              <div>
                <p className="font-medium text-stone-800">メールアドレス</p>
                <p className="text-stone-600">info@ringoya-ryokan.jp</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-stone-600" />
              <div>
                <p className="font-medium text-stone-800">営業時間</p>
                <p className="text-stone-600">チェックイン 15:00〜20:00</p>
                <p className="text-stone-600">チェックアウト 〜11:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-medium mb-6 text-stone-800">交通アクセス</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {transportMethods.map((method, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-stone-600">{method.icon}</div>
                  <h3 className="font-medium text-stone-800">{method.title}</h3>
                </div>
                <ul className="space-y-2">
                  {method.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-stone-600 flex items-start gap-2">
                      <span className="text-amber-600 mt-1.5">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapIcon className="w-6 h-6 text-stone-600" />
            <h2 className="text-2xl font-medium text-stone-800">地図</h2>
          </div>
          <div className="aspect-video bg-stone-100 rounded-lg flex items-center justify-center">
            <p className="text-stone-600">Google Mapsを埋め込み</p>
          </div>
        </div>

        {/* Nearby Spots */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-medium mb-6 text-stone-800">周辺観光スポット</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {nearbySpots.map((spot, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-stone-600">{spot.icon}</div>
                  <div>
                    <h3 className="font-medium text-stone-800">{spot.name}</h3>
                    <p className="text-sm text-stone-500">{spot.distance}</p>
                  </div>
                </div>
                <p className="text-stone-600">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;