import { injectable } from 'inversify'
import { action, observable } from 'mobx'
import { task } from 'mobx-task'

interface BreadcrumbItem {
    text: string;
    href?: string;
}

@injectable()
class BreadcrumbStore {
    @observable.shallow list: BreadcrumbItem[] = [
        {text: 'Home'}
    ]
    changeBreadcrumbData = task(
        action('CHANGEBREASCRUMBSTORE', (data: BreadcrumbItem[]= []) => {
            this.list = data
        })
    )
}
export default BreadcrumbStore