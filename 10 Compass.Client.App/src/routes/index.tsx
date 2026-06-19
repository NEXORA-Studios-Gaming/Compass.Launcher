import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layers, Sparkles, Zap } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { LogoText } from "@/components/logo-text";

export const Route = createFileRoute("/")({
    component: HomeComponent,
});

const features = [
    {
        icon: Zap,
        title: "快速启动",
        description: "一键启动你最爱的 Minecraft 世界，告别繁琐等待。",
    },
    {
        icon: Layers,
        title: "多实例管理",
        description: "轻松管理多个游戏实例，版本与模组自由切换。",
    },
    {
        icon: Sparkles,
        title: "现代体验",
        description: "简洁现代的界面设计，原生性能，流畅体验。",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4,
        },
    },
};

function HomeComponent() {
    return (
        <motion.main
            className="flex min-h-full flex-col items-center justify-center px-6 py-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            <section className="flex flex-col items-center text-center">
                <motion.div variants={logoVariants}>
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                            boxShadow: [
                                "0 0 20px rgba(93, 140, 58, 0.3)",
                                "0 0 36px rgba(93, 140, 58, 0.5)",
                                "0 0 20px rgba(93, 140, 58, 0.3)",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="rounded-full">
                        <Logo width={120} height={120} />
                    </motion.div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-6">
                    <LogoText width={240} height={74} color="currentColor" />
                </motion.div>
            </section>

            <motion.section
                className="mt-14 grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-3"
                variants={cardContainerVariants}
                initial="hidden"
                animate="visible">
                {features.map((feature) => (
                    <motion.div
                        key={feature.title}
                        variants={itemVariants}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}>
                        <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                            <CardHeader>
                                <div className="bg-primary/10 text-primary mb-2 flex h-10 w-10 items-center justify-center rounded-lg">
                                    <feature.icon className="h-5 w-5" />
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                                <CardDescription>{feature.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="text-muted-foreground text-xs">
                                敬请期待更多细节…
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.section>
        </motion.main>
    );
}
