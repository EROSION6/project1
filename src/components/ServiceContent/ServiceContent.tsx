import { AIImprovement } from '../AIImprovement/AIImprovement'
import { AudioVideoConversion } from '../AudioVideoConversion/AudioVideoConversion'
import { ContentGeneration } from '../ContentGeneration/ContentGeneration'
import { SecurityAnalysis } from '../SecurityAnalysis/SecurityAnalysis'
import { ServiceContentBlock } from '../ServiceContentBlock/ServiceContentBlock'
import { TextEditing } from '../TextEditing/TextEditing'
import { UserCabinet } from '../UserCabinet/UserCabinet'

export const ServiceContent = () => {
	return (
		<>
			<ServiceContentBlock
				id='files'
				title='Конвертируем ваши аудио и видео файлы в текст'
			>
				<AudioVideoConversion />
			</ServiceContentBlock>

			<ServiceContentBlock
				id='AI'
				title=''
			>
				<AIImprovement />
			</ServiceContentBlock>

			<ServiceContentBlock
				id='text'
				title='Функции редактирования и корректировки текста'
			>
				<TextEditing />
			</ServiceContentBlock>

			<ServiceContentBlock
				id='content'
				title='Генерация различных типов контента'
			>
				<ContentGeneration />
			</ServiceContentBlock>

			<ServiceContentBlock
				id='security'
				title='Автоматически анализируем все звонки вашего колл-центра и предоставляем подробный отчет с аналитикой и рекомендациями'
			>
				<SecurityAnalysis />
			</ServiceContentBlock>

			<ServiceContentBlock id='LK' title=''>
				<UserCabinet />
			</ServiceContentBlock>
		</>
	)
}
