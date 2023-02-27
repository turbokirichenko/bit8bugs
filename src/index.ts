import { Manager } from './shared/Manager';
import { LoaderScene } from './scene/LoaderScene';

Manager.init(0x000000);

const loady: LoaderScene = new LoaderScene();
Manager.changeScene(loady);
