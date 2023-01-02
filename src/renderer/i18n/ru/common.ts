import { CommonMessages } from '../types'

const common: CommonMessages = {
  'common.stats': 'Статистика',
  'common.network': 'Сеть',
  'common.faqs': 'ЧаВо',
  'common.greeting': 'Добро пожаловать, {name}',
  'common.copyright': '©',
  'common.type': 'Тип',
  'common.address': 'Адрес',
  'common.addresses': 'Адреса',
  'common.to': 'Получатель',
  'common.from': 'Отправитель',
  'common.amount': 'Количество',
  'common.address.self': 'Свой',
  'common.coin': 'Монета',
  'common.password': 'Пароль',
  'common.memo': 'Memo',
  'common.memos': 'Memos - RU',
  'common.date': 'Дата',
  'common.refresh': 'Обновить',
  'common.back': 'Назад',
  'common.general': 'Основной',
  'common.advanced': 'Продвинутый',
  'common.remove': 'Удалить',
  'common.keystore': 'Keystore',
  'common.keystorePassword': 'Пароль Keystore',
  'common.ledger': 'Ledger',
  'common.phrase': 'Фраза',
  'common.submit': 'Отправить',
  'common.confirm': 'Подтвердить',
  'common.cancel': 'Отменить',
  'common.reject': 'Отклонить',
  'common.next': 'Вперед',
  'common.finish': 'Закончить',
  'common.copy': 'Копировать',
  'common.loading': 'Загрузка…',
  'common.error': 'Ошибка',
  'common.test': 'Тест',
  'common.change': 'Сменить',
  'common.wallet': 'Кошелек',
  'common.history': 'История',
  'common.settings': 'Настройки',
  'common.asset': 'Актив',
  'common.assets': 'Актива(ов)',
  'common.rune': 'RUNE',
  'common.pool': 'Пул',
  'common.pool.inbound': 'Вход. пула',
  'common.pools': 'Пулы',
  'common.price': 'Цена',
  'common.price.rune': 'Стоимость RUNE',
  'common.transaction': 'Транзакция',
  'common.transaction.short.rune': 'RUNE tx - RU',
  'common.transaction.short.asset': 'Asset tx - RU',
  'common.viewTransaction': 'Посмотреть транзакцию',
  'common.copyTxUrl': 'Скопировать url транзакции',
  'common.fee': 'Комиссия',
  'common.fee.inbound': 'Входящая',
  'common.fee.inbound.rune': 'RUNE inbound - RU',
  'common.fee.inbound.asset': 'Asset inbound - RU',
  'common.fee.outbound': 'Исходящая',
  'common.fee.outbound.rune': 'RUNE outbound - RU',
  'common.fee.outbound.asset': 'Asset outbound - RU',
  'common.fee.affiliate': 'Партнёрская',
  'common.fees': 'Комиссии',
  'common.fee.estimated': 'Ориентировочная комиссия',
  'common.fees.estimated': 'Ориентировочные комиссии',
  'common.max': 'Макс.',
  'common.min': 'Мин.',
  'common.search': 'Поиск',
  'common.searchAsset': 'Поиск актива',
  'common.retry': 'Повторить',
  'common.reload': 'Обновить',
  'common.action': 'Действие',
  'common.add': 'Добавить',
  'common.swap': 'Обмен',
  'common.savers': 'Сбережения',
  'common.earn': 'Заработок',
  'common.liquidity': 'Ликвидность',
  'common.withdraw': 'Вывести',
  'common.approve': 'Подтвердить',
  'common.approve.checking': 'Проверяем подтверждение для {asset}',
  'common.approve.error': 'Ошибка проверки подтверждения для {asset}: {error}',
  'common.step': 'Шаг {current}/{total}',
  'common.done': 'Готово',
  'common.nodeAddress': 'Адрес узла',
  'common.providerAddress': 'Адрес провайдера',
  'common.tx.healthCheck': 'Проверка сервера',
  'common.tx.sending': 'Отправка транзакции',
  'common.tx.sendingAsset': 'Отправка транзакции {assetTicker}',
  'common.tx.success': 'Транзакция успешно отправлена',
  'common.tx.success-info':
    'Подтверждение транзакции может занять некоторое время (до нескольких минут в зависимости от цепочки)',
  'common.tx.checkResult': 'Проверка результата',
  'common.tx.view': 'Посмотреть {assetTicker} транзакцию',
  'common.modal.confirmTitle': 'Подтвердите действие',
  'common.value': 'Количество',
  'common.manage': 'Управление',
  'common.analytics': 'Аналитика',
  'common.asset.base': 'Базовый',
  'common.asset.change': 'Сменить актив',
  'common.noResult': 'Нет результата',
  'common.rate': 'Курс',
  'common.tx.type.swap': 'Обмен',
  'common.tx.type.donate': 'Донат',
  'common.tx.type.refund': 'Возврат',
  'common.tx.type.deposit': 'Вклад',
  'common.tx.type.withdraw': 'Изъятие',
  'common.tx.type.upgrade': 'Улучшение',
  'common.detail': 'Подробно',
  'common.details': 'Подробности',
  'common.filter': 'Фильтр',
  'common.all': 'Все',
  'common.time.days': '{days} дней',
  'common.time.days.short': '{days}д',
  'common.time.month1': '1 месяц',
  'common.time.month1.short': '1м',
  'common.time.months3': '3 месяца',
  'common.time.months3.short': '3м',
  'common.time.year1': '1 год',
  'common.time.year1.short': '1г',
  'common.time.all': 'Все',
  'common.time.all.short': 'Все',
  'common.theme.light': 'Светлая тема',
  'common.theme.dark': 'Темная тема',
  'common.volume24': 'Количество (24ч)',
  'common.volume24.description': '24ч объём обменов, добавления ликвидности и вывода средств',
  'common.informationMore': 'Больше данных',
  'common.balance': 'Баланс',
  'common.balance.loading': 'Загружаю баланс',
  'common.balances': 'Балансы',
  'common.custom': 'Вручную',
  'common.notsupported.fornetwork': 'Не поддерживается для сети {network}',
  'common.recipient': 'Получатель',
  'common.sender': 'Отправитель',
  'common.legacy': 'Устаревший',
  'common.ledgerlive': 'Ledger Live',
  'common.metamask': 'MetaMask',
  'common.unknown': 'Неизвестен'
}

export default common
