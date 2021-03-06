﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
/// Generated from: poker_room.proto
/// <reference path="common.ts" />

module Cmd {
	export enum PokerConst {
		/**
		 * 系统用户id
		 */
		SysUserId = 10000
	}
	/**
	 * 出牌的类型
	 */
	export enum CardSetType {
		/**
		 * 无牌型
		 */
		CardSetType_None = 0,
		/**
		 * 单张
		 */
		CardSetType_Single = 100,
		/**
		 * 对子
		 */
		CardSetType_Double = 200,
		/**
		 * 顺子
		 */
		CardSetType_StraightSingle = 300,
		/**
		 * 连对
		 */
		CardSetType_StraightDouble = 400,
		/**
		 * 含三张的牌，如 三代一
		 */
		CardSetType_ThreeWithX = 500,
		/**
		 * 三代一
		 */
		CardSetType_ThreeWithOne = 501,
		/**
		 * 含四张的牌，如 四代二
		 */
		CardSetType_FourWithX = 600,
		/**
		 * 炸弹
		 */
		CardSetType_Bomb = 700,
		/**
		 * 没牛
		 */
		CardSetType_BeefNone = 1000,
		/**
		 * 牛1
		 */
		CardSetType_BeefOne = 1001,
		/**
		 * 牛2
		 */
		CardSetType_BeefTwo = 1002,
		/**
		 * 牛3
		 */
		CardSetType_BeefThree = 1003,
		/**
		 * 牛4
		 */
		CardSetType_BeefFour = 1004,
		/**
		 * 牛5
		 */
		CardSetType_BeefFive = 1005,
		/**
		 * 牛6
		 */
		CardSetType_BeefSix = 1006,
		/**
		 * 牛7
		 */
		CardSetType_BeefSeven = 1007,
		/**
		 * 牛8
		 */
		CardSetType_BeefEight = 1008,
		/**
		 * 牛9
		 */
		CardSetType_BeefNine = 1009,
		/**
		 * 牛牛
		 */
		CardSetType_BeefBull = 1010,
		/**
		 * 四花牛
		 */
		CardSetType_BeefFourFlower = 1011,
		/**
		 * 五花牛
		 */
		CardSetType_BeefFiveFlower = 1012,
		/**
		 * 炸弹
		 */
		CardSetType_BeefBomb = 1013,
		/**
		 * 五小牛
		 */
		CardSetType_BeefSmall = 1014,
		/**
		 * 顺子
		 */
		CardSetType_BeefStraight = 1015,
		/**
		 * 同花
		 */
		CardSetType_BeefFlush = 1016,
		/**
		 * 葫芦
		 */
		CardSetType_BeefFullHouse = 1017,
		/**
		 * 炸弹
		 */
		CardSetType_BeefBomb1 = 1018,
		/**
		 * 同花顺
		 */
		CardSetType_BeefStraightFlush = 1019,
		/**
		 * 四连通杀
		 */
		CardSetType_Quadrakill = 1020,
		/**
		 * 龙虎炮
		 */
		CardSetType_DragonTiger = 1021
	}
	export enum SeatState {
		/**
		 * 准备
		 */
		State_Ready = 1,
		/**
		 * 托管
		 */
		State_Host = 2,
		/**
		 * 在游戏中
		 */
		State_InGame = 3,
		/**
		 * 坐下
		 */
		State_Sit = 4,
		/**
		 * 完成
		 */
		State_Complete = 5
	}
	/**
	 * 游戏目前所处的状态
	 */
	export enum GameStatus {
		/**
		 * 空闲时间
		 */
		GameStatus_Free = 1,
		/**
		 * 压注时间
		 */
		GameStatus_Bet = 2,
		/**
		 * 开奖时间
		 */
		GameStatus_Lottery = 3,
		/**
		 * 结算时间
		 */
		GameStatus_Settle = 4,
		/**
		 * 抢／叫地主
		 */
		GameStatus_LordOption = 5,
		/**
		 * 踢
		 */
		GameStatus_Kick = 6,
		/**
		 * 出牌
		 */
		GameStatus_Playing = 7,
		/**
		 * 暂停
		 */
		GameStatus_Pause = 8
	}
	/**
	 * 操作
	 */
	export enum Operation {
		/**
		 * 叫地主 - 不叫
		 */
		LordCall0 = 1,
		/**
		 * 叫地主 - 叫1分
		 */
		LordCall1 = 2,
		/**
		 * 叫地主 - 叫2分
		 */
		LordCall2 = 3,
		/**
		 * 叫地主 - 叫3分
		 */
		LordCall3 = 4,
		/**
		 * 抢地主 - 不抢
		 */
		LordRobNo = 5,
		/**
		 * 抢地主 - 抢
		 */
		LordRobYes = 6,
		/**
		 * 叫地主 - 不叫
		 */
		LordCallNo = 7,
		/**
		 * 叫地主 - 叫
		 */
		LordCallYes = 8,
		/**
		 * 要的起
		 */
		Play = 9,
		/**
		 * 要不去
		 */
		PlayNot = 10,
		/**
		 * 必须出
		 */
		PlayMust = 11,
		/**
		 * 弃牌
		 */
		GiveUp = 12,
		/**
		 * 下注
		 */
		Wagering = 13,
		/**
		 * 跟注
		 */
		FollowBet = 14,
		/**
		 * 起脚
		 */
		UpFoot = 15,
		/**
		 * 不踢
		 */
		NoFoot = 16,
		/**
		 * 反踢
		 */
		BackFoot = 17,
		/**
		 * 德州弃牌
		 */
		Fold = 18,
		/**
		 * 德州跟注
		 */
		Call = 19,
		/**
		 * 德州加牌
		 */
		Raise = 20,
		/**
		 * 德州allin
		 */
		Allin = 21,
		/**
		 * 德州看牌
		 */
		Check = 22
	}
	/**
	 * 荣誉
	 */
	export enum GameHonor {
		/**
		 * 春天
		 */
		GameHonor_Spring = 0,
		/**
		 * 反春天
		 */
		GameHonor_SpringReverse = 1
	}
	/**
	 * 货币类型
	 */
	export enum MoneyType {
		/**
		 * 钻石
		 */
		Diamond = 0,
		/**
		 * 点数
		 */
		Point = 1,
		/**
		 * 刀分
		 */
		CutScore = 2,
		/**
		 * 积分
		 */
		CardScore = 3
	}
	/**
	 * 填坑点数（）
	 */
	export class KengPoint {
		/**
		 * 自己手牌总点数（包括暗牌）
		 */
		allCardPoint: number;
		/**
		 * 自己明牌总点数
		 */
		openCardPoint: number;
		/**
		 * 自己手牌总分差（包括暗牌）
		 */
		allCardPointGap: number;
		/**
		 * 自己明牌分差
		 */
		openCardPointGap: number;
		GetType(): string { return 'Cmd.KengPoint'; }
	}
	/**
	 * 座位数据
	 */
	export class SeatData {
		/**
		 * 座位
		 */
		seatId: number;
		/**
		 * 是否准备
		 */
		isReady: boolean;
		/**
		 * 人物信息
		 */
		role: UserBriefInfo;
		/**
		 * 手牌
		 */
		handCardList: number[];
		/**
		 * 出的牌
		 */
		outCardList: number[];
		/**
		 * 在线状态
		 */
		onlineState: Cmd.OnlineState;
		/**
		 * 是否托管
		 */
		isHost: boolean;
		/**
		 * 倍数
		 */
		multiple: number;
		/**
		 * 刀分
		 */
		cutScore: number;
		/**
		 * 积分
		 */
		cardScore: number;
		/**
		 * 手牌数量,其他人手牌不发时发数量下来
		 */
		handCardNum: number;
		/**
		 * 手牌中王的数量
		 */
		kingNum: number;
		/**
		 * 追加手牌
		 */
		catchCards: number[];
		/**
		 * 填坑点数
		 */
		kengPoint: KengPoint;
		/**
		 * 是否在游戏中
		 */
		isInGame: boolean;
		/**
		 * 总投注数
		 */
		betCount: number;
		/**
		 * 是否坐下
		 */
		isSit: boolean;
		/**
		 * 状态列表
		 */
		stateList: SeatState[];
		/**
		 * 推荐牌
		 */
		recommend: GameObjectData[];
		/**
		 * 追加手牌数量
		 */
		catchNum: number;
		GetType(): string { return 'Cmd.SeatData'; }
	}
	/**
	 * 状态更新通知
	 */
	export class SeatStateUpdate_S {
		op: Cmd.UpdateOperator;
		/**
		 * 状态列表
		 */
		stateList: SeatState[];
		uid: number;
		GetType(): string { return 'Cmd.SeatStateUpdate_S'; }
	}
	/**
	 * 房间内玩家信息
	 */
	export class RoomUserInfo {
		uid: number;
		headUrl: string;
		/**
		 * 昵称
		 */
		nickName: string;
		/**
		 * 房间id
		 */
		roomId: number;
		/**
		 * 如果为0就是站着
		 */
		seatId: number;
		/**
		 * 玩家当前筹码
		 */
		remainder: number;
		/**
		 * 性别
		 */
		gender: string;
		/**
		 * 奖券
		 */
		giftCoupon: number;
		/**
		 * 个性签名
		 */
		signature: string;
		/**
		 * vip等级
		 */
		vipLevel: number;
		/**
		 * 当前赢得的金币，刚进去为0
		 */
		curWinProfit: number;
		GetType(): string { return 'Cmd.RoomUserInfo'; }
	}
	/**
	 * 门的筹码
	 */
	export class DoorChips {
		/**
		 * 1天2地3玄4黄 1大2小3单4双
		 */
		doorId: number;
		/**
		 * 门 总投注数
		 */
		chips: number;
		GetType(): string { return 'Cmd.DoorChips'; }
	}
	export class GameStatusInfo {
		status: GameStatus;
		endTime: number;
		/**
		 * 倒计时秒数
		 */
		leftSec: number;
		GetType(): string { return 'Cmd.GameStatusInfo'; }
	}
	/**
	 * 游戏状态更新
	 */
	export class GameStatusUpdateCmd_S {
		statusInfo: GameStatusInfo;
		winDoor: number;
		winId: number;
		GetType(): string { return 'Cmd.GameStatusUpdateCmd_S'; }
	}
	/**
	 * 本轮局牌的数据
	 */
	export class RoundData {
		/**
		 * 操作位
		 */
		opSeatId: number;
		/**
		 * 操作结束时间
		 */
		opEndTime: number;
		/**
		 * 最后的底桌底三张牌
		 */
		threeCard: number[];
		/**
		 * 倍数
		 */
		multiple: number;
		/**
		 * 地主位
		 */
		lordSeatId: number;
		/**
		 * 抢地主阶段数据
		 */
		robLordData: RoundData.RobLordData;
		callLordData: RoundData.CallLordData;
		kickData: RoundData.YesOrNoData;
		/**
		 * 底分
		 */
		pointBase: number;
		/**
		 * 所有的压注数, 用 betDoor 代替
		 */
		doorChipsSum: DoorChips[];
		/**
		 * 我的压注数   用 betMe 代替
		 */
		doorChipsMe: DoorChips[];
		/**
		 * 门的牌
		 */
		doorCard: GameObjectData[];
		/**
		 * 庄家的牌
		 */
		bankerCard: GameObjectData;
		/**
		 * 状态
		 */
		status: GameStatus;
		/**
		 * 最大压注数
		 */
		betChipsMax: number;
		/**
		 * 所处的阶段
		 */
		stage: GameStatus;
		/**
		 * 底牌
		 */
		bottomCard: number[];
		/**
		 * 排名数据
		 */
		rankList: number[];
		/**
		 * 倒计时秒数opEndTime
		 */
		leftSec: number;
		/**
		 * 可操作
		 */
		opList: Operation[];
		/**
		 * 推荐出牌
		 */
		recommend: CardSetList[];
		/**
		 * 桌内所有筹码分
		 */
		tabPoints: number;
		/**
		 * 本轮踢过玩家（kickData断线后判断玩家是否踢过）
		 */
		kickedList: number[];
		/**
		 * 门内的押注
		 */
		betDoor: BetData;
		/**
		 * 我的押注
		 */
		betMe: BetData;
		GetType(): string { return 'Cmd.RoundData'; }
	}
	export module RoundData {
		/**
		 * TODO: 换成 YesOrNo 类型
		 */
		export class RobLordData {
			/**
			 * 选择“抢地主”的座位
			 */
			sayYes: number[];
			/**
			 * 选择“不抢地主”的座位
			 */
			sayNo: number[];
			GetType(): string { return 'Cmd.RoundData.RobLordData'; }
		}
	}
	export module RoundData {
		export class CallLordData {
			/**
			 * 叫 0分 的座位号
			 */
			call0: number[];
			/**
			 * 叫 1分 的座位号
			 */
			call1: number[];
			/**
			 * 叫 2分 的座位号
			 */
			call2: number[];
			GetType(): string { return 'Cmd.RoundData.CallLordData'; }
		}
	}
	export module RoundData {
		export class YesOrNoData {
			sayYes: number[];
			sayNo: number[];
			GetType(): string { return 'Cmd.RoundData.YesOrNoData'; }
		}
	}
	/**
	 * 牌局历史
	 */
	export class History {
		data: History.HistoryInfo[];
		GetType(): string { return 'Cmd.History'; }
	}
	export module History {
		export class HistoryInfo {
			/**
			 * 输赢
			 */
			roundWinLose: number;
			/**
			 * 利润
			 */
			profit: number;
			/**
			 * 彩票数据
			 */
			lottery: Lottery;
			/**
			 * 赢家id
			 */
			winId: number;
			GetType(): string { return 'Cmd.History.HistoryInfo'; }
		}
	}
	/**
	 * 房间数据
	 */
	export class RoomData {
		roomId: number;
		/**
		 * 玩法属性,只是开关类型的
		 */
		props: number[];
		/**
		 * 座位信息
		 */
		seatList: SeatData[];
		/**
		 * 房主的uid
		 */
		ownerId: number;
		/**
		 * round 数据
		 */
		roundData: RoundData;
		/**
		 * 底分
		 */
		pointBase: number;
		/**
		 * 房间类型
		 */
		roomType: Cmd.RoomType;
		/**
		 * true 叫地主 false 抢地主
		 */
		callOrRob: boolean;
		/**
		 * 牌局总数
		 */
		gameNbr: number;
		/**
		 * 已经进行的牌局数
		 */
		gameNbrCur: number;
		/**
		 * 庄家
		 */
		banker: UserBriefInfo;
		/**
		 * 等待的上庄列表
		 */
		bankerWait: UserBriefInfo[];
		/**
		 * 房间状态
		 */
		statusInfo: GameStatusInfo;
		level: number;
		history: History;
		/**
		 * 彩票信息
		 */
		lottery: Lottery;
		/**
		 * 解散房间信息
		 */
		dissolve: DissolveRoomUpdateCmd_S;
		roomState: Cmd.RoomState;
		/**
		 * 喜分（填坑）
		 */
		happyPoint: number;
		/**
		 * 谁来控制开始游戏操作
		 */
		startGameOpId: number;
		/**
		 * 房间最大人数
		 */
		maxUserNum: number;
		GetType(): string { return 'Cmd.RoomData'; }
	}
	/**
	 * 彩票信息
	 */
	export class Lottery {
		/**
		 * 期号
		 */
		expect: number;
		/**
		 * 开奖时间
		 */
		openstamp: number;
		/**
		 * 开奖数据
		 */
		opencode: number[];
		/**
		 * 开奖数据
		 */
		opennum: number;
		GetType(): string { return 'Cmd.Lottery'; }
	}
	/**
	 * 房间数据更新
	 */
	export class RoomDataUpdateCmd_S {
		roomData: RoomData;
		/**
		 * 其他人的混合牌,记牌器用
		 */
		leftCardList: number[];
		GetType(): string { return 'Cmd.RoomDataUpdateCmd_S'; }
	}
	/**
	 * 房间玩家更新
	 */
	export class RoomSeatUpdateCmd_S {
		op: Cmd.UpdateOperator;
		seatData: SeatData[];
		GetType(): string { return 'Cmd.RoomSeatUpdateCmd_S'; }
	}
	/**
	 * 解散房间请求
	 */
	export class DissolveRoomRequestCmd_C {
		GetType(): string { return 'Cmd.DissolveRoomRequestCmd_C'; }
	}
	/**
	 * 回复解散房间请求
	 */
	export class DissolveRoomReturnCmd_C {
		yesOrNo: boolean;
		GetType(): string { return 'Cmd.DissolveRoomReturnCmd_C'; }
	}
	/**
	 * 解散房间数据更新
	 */
	export class DissolveRoomUpdateCmd_S {
		/**
		 * 发起人
		 */
		sponsor: string;
		voterList: DissolveRoomUpdateCmd_S.Voter[];
		/**
		 * 解散房间结束时间
		 */
		endTime: number;
		/**
		 * 倒计时秒数
		 */
		leftSec: number;
		GetType(): string { return 'Cmd.DissolveRoomUpdateCmd_S'; }
	}
	export module DissolveRoomUpdateCmd_S {
		export class Voter {
			uid: number;
			/**
			 * 投票人名称
			 */
			name: string;
			/**
			 * 同意 / 等待
			 */
			yesOrWait: boolean;
			GetType(): string { return 'Cmd.DissolveRoomUpdateCmd_S.Voter'; }
		}
	}
	/**
	 *  C-&gt;S 开始游戏请求
	 *  S-&gt;C 开始游戏通知
	 */
	export class StartGameCmd_CS {
		/**
		 * 现在进行第几局
		 */
		gameNbrCur: number;
		/**
		 * 最大压注数
		 */
		betChipsMax: number;
		GetType(): string { return 'Cmd.StartGameCmd_CS'; }
	}
	/**
	 * 游戏开始
	 */
	export class StartGameCmd_S {
		/**
		 * 现在进行第几局
		 */
		gameNbrCur: number;
		/**
		 * 最大压注数
		 */
		betChipsMax: number;
		GetType(): string { return 'Cmd.StartGameCmd_S'; }
	}
	/**
	 * 展示牌请求
	 */
	export class DisplayCardCmd_CS {
		each: GameObjectData[];
		result: boolean;
		GetType(): string { return 'Cmd.DisplayCardCmd_CS'; }
	}
	/**
	 * 发牌
	 */
	export class DealCardCmd_S {
		/**
		 * 每个座位的牌
		 */
		seatCardList: SeatData[];
		/**
		 * 每个门的牌
		 */
		door: GameObjectData[];
		/**
		 * 庄稼的牌
		 */
		banker: GameObjectData;
		/**
		 * 叫分牌,斗地主叫分用
		 */
		callCard: number;
		/**
		 * 开始叫分的玩家
		 */
		callUid: number;
		/**
		 * 其他人的混合牌,记牌器用
		 */
		leftCardList: number[];
		/**
		 * 发牌类型:1 或不发表示覆盖,2表示追加,3表示删除
		 */
		dealCardType: Cmd.UpdateOperator;
		GetType(): string { return 'Cmd.DealCardCmd_S'; }
	}
	/**
	 * 牌集列表
	 */
	export class CardSetList {
		/**
		 * 手牌
		 */
		cardSet: number[];
		GetType(): string { return 'Cmd.CardSetList'; }
	}
	/**
	 * 操作位轮转
	 */
	export class NewOperateSeatCmd_S {
		seatId: number;
		/**
		 * 推荐出牌
		 */
		cardSetList: CardSetList[];
		/**
		 * 牌型
		 */
		cardListType: CardSetType;
		/**
		 * 操作bit位 废弃:使用 opList 代替
		 */
		opBit: number;
		/**
		 * 倒计时秒数
		 */
		leftSec: number;
		/**
		 * 可操作列表
		 */
		opList: Operation[];
		/**
		 * 操作结束时间 废弃: 使用 leftSec 代替
		 */
		endTime: number;
		GetType(): string { return 'Cmd.NewOperateSeatCmd_S'; }
	}
	/**
	 * 排名通知
	 */
	export class RankUpdateCmd_S {
		seatId: number;
		place: number;
		GetType(): string { return 'Cmd.RankUpdateCmd_S'; }
	}
	/**
	 *  C-&gt;S 出牌请求
	 *  S-&gt;C 出牌通知
	 */
	export class PlayCardCmd_CS {
		uid: number;
		/**
		 * 打出的牌
		 */
		cardList: number[];
		/**
		 * 打出牌的类型
		 */
		cardListType: CardSetType;
		replace: number[];
		/**
		 * 剩余牌数
		 */
		handcardNum: number;
		/**
		 * 倍数
		 */
		multiple: number;
		GetType(): string { return 'Cmd.PlayCardCmd_CS'; }
	}
	/**
	 * 请求玩家信息
	 */
	export class GetUserBaseInfo_CS {
		/**
		 * 玩家基本信息
		 */
		role: Cmd.UserBaseInfo;
		GetType(): string { return 'Cmd.GetUserBaseInfo_CS'; }
	}
	/**
	 * 底牌更新通知
	 */
	export class BottomCardUpdateCmd_S {
		bottomCard: number[];
		GetType(): string { return 'Cmd.BottomCardUpdateCmd_S'; }
	}
	/**
	 *  C-&gt;S 抢地主请求
	 *  S-&gt;C 玩家抢地主通知
	 */
	export class LandlordRobCmd_CS {
		uid: number;
		/**
		 * 抢 还是 不抢
		 */
		yesOrNo: boolean;
		GetType(): string { return 'Cmd.LandlordRobCmd_CS'; }
	}
	/**
	 *  C-&gt;S 叫地主请求
	 *  S-&gt;C 玩家叫地主通知
	 */
	export class LandlordCallCmd_CS {
		uid: number;
		point: number;
		GetType(): string { return 'Cmd.LandlordCallCmd_CS'; }
	}
	/**
	 * 轮到玩家抢/叫地主通知
	 */
	export class LandlordOptionCmd_S {
		uid: number;
		/**
		 * 操作结束时间
		 */
		endTime: number;
		/**
		 * 倒计时秒数
		 */
		leftSec: number;
		/**
		 * 可操作列表
		 */
		opList: Operation[];
		GetType(): string { return 'Cmd.LandlordOptionCmd_S'; }
	}
	/**
	 * 产生地主通知
	 */
	export class LandlordUpdateCmd_S {
		/**
		 * 地主
		 */
		uid: number;
		/**
		 * 三张底牌
		 */
		threeCard: number[];
		GetType(): string { return 'Cmd.LandlordUpdateCmd_S'; }
	}
	/**
	 * 底分更新通知
	 */
	export class PointBaseUpdateCmd_S {
		pointBase: number;
		GetType(): string { return 'Cmd.PointBaseUpdateCmd_S'; }
	}
	/**
	 *  轮到玩家抢地主通知
	 *  废弃，随后删除，请使用 LandlordOptionCmd_S
	 */
	export class LandlordRobOptionCmd_S {
		uid: number;
		/**
		 * 操作结束时间
		 */
		endTime: number;
		/**
		 * 倒计时秒数
		 */
		leftSec: number;
		GetType(): string { return 'Cmd.LandlordRobOptionCmd_S'; }
	}
	/**
	 * 轮到玩家 踢 操作
	 */
	export class KickPlayOptionalCmd_S {
		uid: number;
		endTime: number;
		/**
		 * 倒计时秒数
		 */
		leftSec: number;
		GetType(): string { return 'Cmd.KickPlayOptionalCmd_S'; }
	}
	/**
	 *  C-&gt;S 踢 操作请求
	 *  S-&gt;C 踢 操作通知
	 */
	export class KickPlayCmd_CS {
		uid: number;
		yesOrNo: boolean;
		GetType(): string { return 'Cmd.KickPlayCmd_CS'; }
	}
	/**
	 * 倍数更新
	 */
	export class MultipleUpdateCmd_S {
		update: MultipleUpdateCmd_S.Update[];
		/**
		 * 废弃
		 */
		multiple: number;
		GetType(): string { return 'Cmd.MultipleUpdateCmd_S'; }
	}
	export module MultipleUpdateCmd_S {
		export class Update {
			seatId: number;
			multiple: number;
			GetType(): string { return 'Cmd.MultipleUpdateCmd_S.Update'; }
		}
	}
	/**
	 * 玩家简单信息
	 */
	export class UserBriefInfo {
		uid: number;
		name: string;
		headurl: string;
		point: number;
		gender: string;
		GetType(): string { return 'Cmd.UserBriefInfo'; }
	}
	/**
	 * 游戏对象
	 */
	export class GameObjectData {
		/**
		 * 门id
		 */
		doorId: number;
		user: UserBriefInfo;
		/**
		 * 第几局
		 */
		order: number;
		/**
		 * 牌
		 */
		cardList: number[];
		/**
		 * 牌型
		 */
		cardType: CardSetType;
		/**
		 * 现在的分数
		 */
		point: number;
		/**
		 * 利润
		 */
		profit: number;
		/**
		 * 倍数
		 */
		multiple: number;
		/**
		 * 关键牌
		 */
		keyCard: number[];
		honorId: number[];
		/**
		 * 手牌点数
		 */
		kengPoint: KengPoint;
		betResult: BetResult;
		/**
		 * 牌集列表
		 */
		cardSetList: CardSetList[];
		GetType(): string { return 'Cmd.GameObjectData'; }
	}
	export class BetResult {
		/**
		 * 数位押注数
		 */
		digitBetChipsList: number[];
		/**
		 * 数位押注利润
		 */
		digitProfitList: number[];
		/**
		 * 合数押注数
		 */
		sumBetChipsTotal: number;
		/**
		 * 合数押注利润
		 */
		sumProfitTotal: number;
		GetType(): string { return 'Cmd.BetResult'; }
	}
	/**
	 * 牌局结束后结算通知
	 */
	export class RoundResultCmd_S {
		resultList: GameObjectData[];
		/**
		 * 地主id
		 */
		landlord: number;
		/**
		 * 赢家
		 */
		winnerList: number[];
		/**
		 * 庄家数据
		 */
		bankerData: GameObjectData;
		/**
		 * 4个门 数据
		 */
		doorsData: GameObjectData[];
		/**
		 * 自己的数据
		 */
		myData: GameObjectData;
		/**
		 * 四个门的输赢
		 */
		winLose: number;
		/**
		 * 荣誉
		 */
		honor: GameHonor[];
		/**
		 * 本期彩票数据
		 */
		lottery: Lottery;
		/**
		 * 下期彩票
		 */
		lotteryNext: Lottery;
		/**
		 * 是否还有下一局
		 */
		haveNextRound: boolean;
		/**
		 * 二人斗地主用,未发下去的底牌
		 */
		otherCardList: number[];
		/**
		 * 喜分（填坑）
		 */
		happyPoint: number;
		GetType(): string { return 'Cmd.RoundResultCmd_S'; }
	}
	/**
	 * 房间最后的结算通知
	 */
	export class FinalResult_S {
		recordList: FinalResult_S.Record[];
		/**
		 * 大赢家
		 */
		userWinMost: number;
		/**
		 * 游戏总局数
		 */
		gameNum: number;
		/**
		 * 解散原因
		 */
		reason: string;
		/**
		 * 总结算新老逻辑标识 有表示新版本 没有表示老版本
		 */
		isNew: number;
		/**
		 * 如果是匹配号房间,显示出匹配号
		 */
		matchId: number;
		/**
		 * 喜分（填坑）
		 */
		happyPoint: number;
		GetType(): string { return 'Cmd.FinalResult_S'; }
	}
	export module FinalResult_S {
		export class Record {
			user: UserBriefInfo;
			/**
			 * 每一局数据
			 */
			resultList: GameObjectData[];
			/**
			 * 总利润
			 */
			profitSum: number;
			/**
			 * 最大利润
			 */
			profitMax: number;
			/**
			 * 赢局数
			 */
			winNum: number;
			/**
			 * 赢局数
			 */
			gameNum: number;
			/**
			 * 坐庄数
			 */
			bankerNum: number;
			/**
			 * 炸弹数量
			 */
			bombNum: number;
			/**
			 * 最好牌型
			 */
			bestCardType: CardSetType;
			GetType(): string { return 'Cmd.FinalResult_S.Record'; }
		}
	}
	/**
	 *  gm指令
	 *  C-&gt;S 获取所有可选牌
	 *  S-&gt;C 所有可选牌更新
	 */
	export class GmAvailableCardUpdateCmd_CS {
		/**
		 * 所有可选的牌
		 */
		cardList: number[];
		/**
		 * 每个座位已经选的牌
		 */
		seatSelect: GmAvailableCardUpdateCmd_CS.SeatSelectData[];
		GetType(): string { return 'Cmd.GmAvailableCardUpdateCmd_CS'; }
	}
	export module GmAvailableCardUpdateCmd_CS {
		export class SeatSelectData {
			seatId: number;
			/**
			 * 所选的牌
			 */
			selectCard: number[];
			GetType(): string { return 'Cmd.GmAvailableCardUpdateCmd_CS.SeatSelectData'; }
		}
	}
	/**
	 *  gm指令
	 *  选牌请求
	 */
	export class GmSelectCardCmd_C {
		cardList: number[];
		GetType(): string { return 'Cmd.GmSelectCardCmd_C'; }
	}
	/**
	 *  gm指令
	 *  结束牌局请求
	 */
	export class GmFinishRoundCmd_C {
		GetType(): string { return 'Cmd.GmFinishRoundCmd_C'; }
	}
	/**
	 * 数位投注
	 */
	export class DigitChips {
		/**
		 * 数位, 个位
		 */
		digit: DigitChips.Digit;
		/**
		 * 数字
		 */
		number: number;
		/**
		 * 投注数
		 */
		chips: number;
		GetType(): string { return 'Cmd.DigitChips'; }
	}
	export module DigitChips {
		/**
		 * 数位
		 */
		export enum Digit {
			One = 1,
			Ten = 2,
			Hundred = 3,
			Thousand = 4
		}
	}
	/**
	 *  C-&gt;S 压注请求
	 *  S-&gt;C 压注通知
	 */
	export class BetRoomCmd_CS {
		bet: DoorChips;
		uid: number;
		betDigit: DigitChips;
		/**
		 * 筹码
		 */
		chip: number;
		/**
		 * 操作类型
		 */
		opType: Operation;
		betSum: DoorChips;
		GetType(): string { return 'Cmd.BetRoomCmd_CS'; }
	}
	/**
	 * 押注数据
	 */
	export class BetData {
		betNumber: DoorChips[];
		betDigit: DigitData;
		betSum: DoorChips[];
		GetType(): string { return 'Cmd.BetData'; }
	}
	/**
	 * 门筹码更新 废弃 用BetUpdateCmd_S代替
	 */
	export class DoorUpdataCmd_S {
		DoorChips: DoorChips[];
		GetType(): string { return 'Cmd.DoorUpdataCmd_S'; }
	}
	/**
	 * 数位押注的数据
	 */
	export class DigitData {
		/**
		 * 个位押注数
		 */
		one: DigitChips[];
		/**
		 * 十位
		 */
		ten: DigitChips[];
		/**
		 * 百位
		 */
		hundred: DigitChips[];
		/**
		 * 千位
		 */
		thousand: DigitChips[];
		GetType(): string { return 'Cmd.DigitData'; }
	}
	/**
	 * 压注数更新
	 */
	export class BetUpdateCmd_S {
		betData: BetData;
		GetType(): string { return 'Cmd.BetUpdateCmd_S'; }
	}
	/**
	 * 上庄请求
	 */
	export class BankerUpCmd_C {
		GetType(): string { return 'Cmd.BankerUpCmd_C'; }
	}
	/**
	 * 下庄请求
	 */
	export class BankerDownCmd_C {
		GetType(): string { return 'Cmd.BankerDownCmd_C'; }
	}
	/**
	 * 上庄列表更新
	 */
	export class BankerWaitListUpdateCmd_S {
		op: Cmd.UpdateOperator;
		waitList: UserBriefInfo[];
		GetType(): string { return 'Cmd.BankerWaitListUpdateCmd_S'; }
	}
	/**
	 * 更新庄家信息
	 */
	export class BankerUpdateCmd_S {
		/**
		 * 庄家信息
		 */
		banker: UserBriefInfo;
		/**
		 * 连庄局数
		 */
		continueNum: number;
		/**
		 * 庄家更新类型
		 */
		continueOrChange: boolean;
		GetType(): string { return 'Cmd.BankerUpdateCmd_S'; }
	}
	/**
	 * 货币更新通知
	 */
	export class MoneyUpdateCmd_S {
		update: MoneyUpdateCmd_S.Update[];
		GetType(): string { return 'Cmd.MoneyUpdateCmd_S'; }
	}
	export module MoneyUpdateCmd_S {
		export class Update {
			money: MoneyType;
			num: number;
			uid: number;
			GetType(): string { return 'Cmd.MoneyUpdateCmd_S.Update'; }
		}
	}
	/**
	 *  C-&gt;S 请求历史数据
	 *  S-&gt;C 历史数据更新
	 */
	export class HistoryUpdateCmd_CS {
		/**
		 * 需要数据的开始索引
		 */
		index: number;
		/**
		 * 需要的数量
		 */
		num: number;
		history: History;
		GetType(): string { return 'Cmd.HistoryUpdateCmd_CS'; }
	}
	/**
	 *  C-&gt;S 坐下请求
	 *  S-&gt;C 坐下通知
	 */
	export class SitDownCmd_CS {
		uid: number;
		GetType(): string { return 'Cmd.SitDownCmd_CS'; }
	}
	/**
	 * 开始游戏操作位更新
	 */
	export class StartGameOpIdUpdate_S {
		/**
		 * 谁来控制开始游戏操作
		 */
		startGameOpId: number;
		GetType(): string { return 'Cmd.StartGameOpIdUpdate_S'; }
	}
	/**
	 * 通知客户端显示具体的牌
	 */
	export class ShowCards_S {
		cards: ShowCards_S.Cards[];
		GetType(): string { return 'Cmd.ShowCards_S'; }
	}
	export module ShowCards_S {
		export class Cards {
			uid: number;
			cards: number[];
			GetType(): string { return 'Cmd.ShowCards_S.Cards'; }
		}
	}
	export class NiuNiuCard {
		/**
		 * 牌id
		 */
		id: number;
		/**
		 * 剩余数量
		 */
		num: number;
		GetType(): string { return 'Cmd.NiuNiuCard'; }
	}
	/**
	 * 牛牛缺牌数量
	 */
	export class NeedNiuNiuCard_S {
		/**
		 * 一共还有几张可组成的牛牛牌
		 */
		allnum: number;
		/**
		 * 剩余牛牛牌数量
		 */
		cards: NiuNiuCard[];
		GetType(): string { return 'Cmd.NeedNiuNiuCard_S'; }
	}
}
