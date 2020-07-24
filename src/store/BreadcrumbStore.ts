import { observable } from 'mobx'

interface BreadcrumbItem {
    text: string;
    href?: string;
}

class BreadcrumbStore {
    @observable.shallow list: BreadcrumbItem[] = [
        {text: 'Home'}
    ]
    changeBreadcrumbData = (data: BreadcrumbItem[]= []) => {
        this.list = data
    }
}
export default new BreadcrumbStore()