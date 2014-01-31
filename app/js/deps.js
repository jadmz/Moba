// This file was autogenerated by app/closure-library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../js/engine/core/Component.js', ['CrunchJS.Component'], []);
goog.addDependency('../../../js/engine/core/EntityComposition.js', ['CrunchJS.EntityComposition'], ['CrunchJS.Utils.BitSetOperator', 'goog.array']);
goog.addDependency('../../../js/engine/core/Frame.js', ['CrunchJS.Frame'], []);
goog.addDependency('../../../js/engine/core/Scene.js', ['CrunchJS.Scene'], ['CrunchJS.Internal.ComponentManager', 'CrunchJS.Internal.EntityManager', 'CrunchJS.Internal.EventManager', 'CrunchJS.Internal.SystemManager', 'CrunchJS.Network.Channel.WebWorkerChannel', 'goog.object']);
goog.addDependency('../../../js/engine/core/System.js', ['CrunchJS.System'], ['goog.structs', 'goog.structs.Set']);
goog.addDependency('../../../js/engine/core/World.js', ['CrunchJS', 'CrunchJS.DATA_SYNC_DEBUG', 'CrunchJS.DEBUG', 'CrunchJS.EngineCommands', 'CrunchJS.Events', 'CrunchJS.LogLevels', 'CrunchJS.World', 'CrunchJS.world'], ['CrunchJS.Internal.FrameManager', 'CrunchJS.Internal.SceneManager', 'CrunchJS.Network.Channel.WebWorkerChannel', 'CrunchJS.Network.RemoteEngine.MainRemoteEngine', 'goog.Timer', 'goog.events', 'goog.object']);
goog.addDependency('../../../js/engine/internal/ComponentManager.js', ['CrunchJS.Internal.ComponentManager'], ['CrunchJS.EntityComposition', 'CrunchJS.Internal.Manager', 'CrunchJS.Utils.BitSetOperator', 'goog.array', 'goog.object', 'goog.structs', 'goog.structs.Map', 'goog.structs.Set']);
goog.addDependency('../../../js/engine/internal/EntityManager.js', ['CrunchJS.Internal.EntityManager'], ['CrunchJS.Internal.Manager', 'goog.array', 'goog.object', 'goog.structs.Set']);
goog.addDependency('../../../js/engine/internal/EventManager.js', ['CrunchJS.Internal.EventManager'], ['goog.array', 'goog.structs', 'goog.structs.Map', 'goog.structs.Set']);
goog.addDependency('../../../js/engine/internal/FrameManager.js', ['CrunchJS.Internal.FrameManager'], ['CrunchJS.Frame']);
goog.addDependency('../../../js/engine/internal/Manager.js', ['CrunchJS.Internal.Manager'], []);
goog.addDependency('../../../js/engine/internal/SceneManager.js', ['CrunchJS.Internal.SceneManager'], ['goog.structs', 'goog.structs.Map']);
goog.addDependency('../../../js/engine/internal/SystemManager.js', ['CrunchJS.Internal.SystemManager'], ['CrunchJS.Internal.Manager', 'goog.array']);
goog.addDependency('../../../js/engine/network/channels/ichannel.js', ['CrunchJS.Network.Channel.IChannel'], []);
goog.addDependency('../../../js/engine/network/channels/webworker-channel.js', ['CrunchJS.Network.Channel.WebWorkerChannel'], ['CrunchJS.Network.Channel.IChannel', 'goog.array', 'goog.structs', 'goog.structs.Map', 'goog.structs.Set']);
goog.addDependency('../../../js/engine/network/remoteengines/AbstractRemoteEngine.js', ['CrunchJS.Network.RemoteEngine', 'CrunchJS.Network.RemoteEngine.AbstractRemoteEngine'], ['CrunchJS.Internal.EventManager']);
goog.addDependency('../../../js/engine/network/remoteengines/MainRemoteEngine.js', ['CrunchJS.Network.RemoteEngine.MainRemoteEngine'], ['CrunchJS.Network.Channel.WebWorkerChannel', 'CrunchJS.Network.RemoteEngine.TrustedRemoteEngine']);
goog.addDependency('../../../js/engine/network/remoteengines/TrustedRemoteEngine.js', ['CrunchJS.Network.RemoteEngine.TrustedRemoteEngine'], ['CrunchJS.Network.RemoteEngine.AbstractRemoteEngine']);
goog.addDependency('../../../js/engine/network/remoteengines/WWRemoteEngine.js', ['CrunchJS.Network.RemoteEngine.WWRemoteEngine'], ['CrunchJS.Network.Channel.WebWorkerChannel', 'CrunchJS.Network.RemoteEngine.TrustedRemoteEngine']);
goog.addDependency('../../../js/engine/utils/bitset.js', ['CrunchJS.Utils.BitSetOperator'], []);
goog.addDependency('../../../js/game/components/examples/ExampleComp.js', ['Moba.ExampleComp'], ['CrunchJS.Component']);
goog.addDependency('../../../js/game/components/examples/ExampleComp1.js', ['Moba.ExampleComp1'], ['CrunchJS.Component']);
goog.addDependency('../../../js/game/core/core.js', ['Moba', 'Moba.Core'], ['CrunchJS', 'Moba.ExampleComp', 'Moba.ExampleComp1', 'Moba.ExampleScene', 'Moba.ExampleSystem', 'Moba.ExampleSystem1']);
goog.addDependency('../../../js/game/scenes/examples/ExampleScene.js', ['Moba.ExampleScene'], ['CrunchJS.Network.RemoteEngine.WWRemoteEngine', 'CrunchJS.Scene']);
goog.addDependency('../../../js/game/simulation/simulation-bootstrap.js', ['SimulationBootstrap'], ['Simulation']);
goog.addDependency('../../../js/game/simulation/simulation.js', ['Simulation'], ['CrunchJS', 'CrunchJS.Network.Channel.WebWorkerChannel', 'Moba.ExampleScene', 'SimulationConfig']);
goog.addDependency('../../../js/game/systems/example/ExampleSystem.js', ['Moba.ExampleSystem'], ['CrunchJS.System']);
goog.addDependency('../../../js/game/systems/example/ExampleSystem1.js', ['Moba.ExampleSystem1'], ['CrunchJS.System']);
goog.addDependency('../../../js/main.js', ['main'], ['Moba']);
goog.addDependency('../../../js/shared/simulation-config.js', ['SimulationConfig'], ['Moba.ExampleSystem']);
goog.addDependency('app/js/main.js', ['main'], ['Moba']);
